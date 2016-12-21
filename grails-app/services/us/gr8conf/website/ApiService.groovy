package us.gr8conf.website

import grails.config.Config
import grails.core.GrailsApplication
import grails.plugin.cache.Cacheable
import grails.plugins.rest.client.RestBuilder
import org.hibernate.annotations.Cache

class ApiService {
    GrailsApplication grailsApplication
    def EMPTY_LIST = [:]

    private Config getConfig() {
        grailsApplication.config
    }

    private String getUrl() {
        config.gr8conf.cfp.url
    }

    private String getConfId() {
        config.gr8conf.cfp.confId
    }

    @Cacheable(value = "speakers")
    List getSpeakers(Integer id) {
        List data = getData('speakers')
        if(id) {
            data = [data.find { it.id == id } ?: EMPTY_LIST]
        }
        data
    }

    @Cacheable(value = "talks")
    List getTalks(Integer id) {
        List data = getData('talks')
        if(id) {
            data = [data.find { it.id == id } ?: EMPTY_LIST]
        }
        data
    }

    @Cacheable(value = "agenda")
    List getAgenda(String day = null) {
        List data = getData('agenda')
        if(day) {
            data = [data.find { it.day == day } ?: EMPTY_LIST]
        }
        data
    }

    @Cacheable(value = "tags")
    List getTags(String tag) {
        List data = getData('tags')
        if(tag) {
            data = [data.find { it.tag == tag } ?: EMPTY_LIST]
        }
        data
    }

    private List getData(String type) {
        RestBuilder rest = new RestBuilder()

        def response = rest.get("${url}/${type}/${confId}") {
            accept 'application/json'
        }

        if (response.status == 200) {
            return response.json
        } else {
            log.error "Error communicating with API for ${type}"
            return null
        }
    }
}

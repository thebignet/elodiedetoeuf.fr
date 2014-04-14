package com.elodiedetoeuf.configuration;

import java.io.Serializable;

public class WebSitemapDto implements Serializable {
    private static final long serialVersionUID = 160745006871242517L;
    private final String url;
    private final Double priority;

    public String getUrl() {
        return url;
    }

    public Double getPriority() {
        return priority;
    }

    public WebSitemapDto(String url, Double priority) {
        super();
        this.url = url;
        this.priority = priority;
    }
}

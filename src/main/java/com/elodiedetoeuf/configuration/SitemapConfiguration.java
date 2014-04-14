package com.elodiedetoeuf.configuration;

import java.io.File;
import java.io.IOException;
import java.io.StringWriter;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;

import com.redfin.sitemapgenerator.ChangeFreq;
import com.redfin.sitemapgenerator.WebSitemapGenerator;
import com.redfin.sitemapgenerator.WebSitemapUrl;

@Configuration
public class SitemapConfiguration {

    private static final String SITE_URL = "http://www.elodiedetoeuf.fr";
    private static final List<WebSitemapDto> pages = Arrays.asList(new WebSitemapDto("", 1.0), new WebSitemapDto(
            "mariage", 0.8), new WebSitemapDto("presentation", 1.0), new WebSitemapDto("babyshower", 0.4),
            new WebSitemapDto("tarifs", 0.8), new WebSitemapDto("illustratrice", 0.3),
            new WebSitemapDto("contact", 0.5), new WebSitemapDto("bapteme", 0.4));

    @Bean
    public String sitemap() throws IOException {
        File sitemapFile = new File("./tmp/");
        WebSitemapGenerator wsg = new WebSitemapGenerator(SITE_URL, sitemapFile);
        for (WebSitemapDto page : pages) {
            WebSitemapUrl url = new WebSitemapUrl.Options(SITE_URL + "/" + page.getUrl()).lastMod(new Date()).priority(
                    page.getPriority()).changeFreq(ChangeFreq.HOURLY).build();
            wsg.addUrl(url);
        }
        wsg.write();
        Resource resource = new FileSystemResource("./tmp/sitemap.xml");
        StringWriter writer = new StringWriter();
        IOUtils.copy(resource.getInputStream(), writer, "UTF-8");
        return writer.toString();
    }
}

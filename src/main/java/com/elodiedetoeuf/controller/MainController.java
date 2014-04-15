package com.elodiedetoeuf.controller;

import java.io.IOException;
import java.util.regex.Pattern;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {

    @Autowired
    private String sitemap;

    private static final String BOTS = "Googlebot|bingbot|Googlebot-Mobile|Baiduspider|Yahoo|YahooSeeker|DoCoMo|Twitterbot|TweetmemeBot|Twikle|Netseer|Daumoa|SeznamBot|Ezooms|MSNBot|Exabot|MJ12bot|sogou spider|YandexBot|bitlybot|ia_archiver|proximic|spbot|ChangeDetection|NaverBot|MetaJobBot|magpie-crawler|Genieo Web filter|Qualidator.com Bot|Woko|Vagabondo|360Spider|ExB Language Crawler|AddThis.com|aiHitBot|Spinn3r|BingPreview|GrapeshotCrawler|CareerBot|ZumBot|ShopWiki|bixocrawler|uMBot|sistrix|linkdexbot|AhrefsBot|archive.org_bot|SeoCheckBot|TurnitinBot|VoilaBot|SearchmetricsBot|Butterfly|Yahoo!|Plukkie|yacybot|trendictionbot|UASlinkChecker|Blekkobot|Wotbox|YioopBot|meanpathbot|TinEye|LuminateBot|FyberSpider|Infohelfer|linkdex.com|Curious George|Fetch-Guess|ichiro|MojeekBot|SBSearch|WebThumbnail|socialbm_bot|SemrushBot|Vedma|alexa site saudit|SEOkicks-Robot|Browsershots|BLEXBot|woriobot|AMZNKAssocBot|Speedy|oBot|HostTracker|OpenWebSpider|WBSearchBot|FacebookExternalHit";
    private static final Pattern BOT_PATTERN = Pattern.compile(BOTS);
    private static final Log log = LogFactory.getLog(MainController.class);
    private static final String INDEX = "index";
    private static final String HTML_EXT = ".html";
    private static final String SNAPSHOTS_DIR = "snapshots/";
    private static final String INDEX_PAGE = INDEX + HTML_EXT;

    private String homeUser() {
    	return INDEX_PAGE;
    }

    private String pageBot(String page) {
    	StringBuilder sb = new StringBuilder(SNAPSHOTS_DIR);
    	sb.append("".equals(page)?INDEX:page);
    	sb.append(HTML_EXT);
    	return sb.toString();
    }

    private boolean isBot(String userAgent) {
        boolean matches = BOT_PATTERN.matcher(userAgent).find();
        if (matches && log.isInfoEnabled()) {
            log.info("Bot <" + userAgent + ">");
        }
        return matches;
    }

    private String getPageByUserAgent(String userAgent, String page) {
        return isBot(userAgent) ? pageBot(page) : homeUser();
    }

    /* Main page */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(@RequestHeader("User-Agent") String userAgent) {
        return getPageByUserAgent(userAgent, "");
    }

    @RequestMapping(value = "/{page:mariage|presentation|babyshower|tarifs|illustratrice|contact}", method = RequestMethod.GET)
    public String mariage(@RequestHeader("User-Agent") String userAgent, @PathVariable String page) {
        return getPageByUserAgent(userAgent, page);
    }

    @RequestMapping(value = "/sitemap.xml", method = RequestMethod.GET)
    @ResponseBody
    public String sitemap() throws IOException {
        return sitemap;
    }
}

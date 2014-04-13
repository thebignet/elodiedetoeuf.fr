package com.elodiedetoeuf.controller;

import java.util.regex.Pattern;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {
	
	private static final String BOTS = "Googlebot|bingbot|Googlebot-Mobile|Baiduspider|Yahoo|YahooSeeker|DoCoMo|Twitterbot|TweetmemeBot|Twikle|Netseer|Daumoa|SeznamBot|Ezooms|MSNBot|Exabot|MJ12bot|sogou spider|YandexBot|bitlybot|ia_archiver|proximic|spbot|ChangeDetection|NaverBot|MetaJobBot|magpie-crawler|Genieo Web filter|Qualidator.com Bot|Woko|Vagabondo|360Spider|ExB Language Crawler|AddThis.com|aiHitBot|Spinn3r|BingPreview|GrapeshotCrawler|CareerBot|ZumBot|ShopWiki|bixocrawler|uMBot|sistrix|linkdexbot|AhrefsBot|archive.org_bot|SeoCheckBot|TurnitinBot|VoilaBot|SearchmetricsBot|Butterfly|Yahoo!|Plukkie|yacybot|trendictionbot|UASlinkChecker|Blekkobot|Wotbox|YioopBot|meanpathbot|TinEye|LuminateBot|FyberSpider|Infohelfer|linkdex.com|Curious George|Fetch-Guess|ichiro|MojeekBot|SBSearch|WebThumbnail|socialbm_bot|SemrushBot|Vedma|alexa site saudit|SEOkicks-Robot|Browsershots|BLEXBot|woriobot|AMZNKAssocBot|Speedy|oBot|HostTracker|OpenWebSpider|WBSearchBot|FacebookExternalHit";
	private static final Pattern BOT_PATTERN = Pattern.compile(BOTS);
	
	private String homeUser() {
        return "index.html";
	}
	
	private String pageBot(String page) {
        return "snapshots/sp_"+page+".html";
	}
	
	private boolean isBot(String userAgent) {
		return BOT_PATTERN.matcher(userAgent).find();
	}
	
	private String getPageByUserAgent(String userAgent,String page) {
		return isBot(userAgent)?pageBot(page):homeUser();
	}
	
	/* Main page */
	@RequestMapping(value="/",method=RequestMethod.GET)
	public String index(@RequestHeader("User-Agent") String userAgent){
		return getPageByUserAgent(userAgent,"");
	}
	@RequestMapping(value="/{page:mariage|presentation|babyshower|tarifs|illustratrice|contact}",method=RequestMethod.GET)
	public String mariage(@RequestHeader("User-Agent") String userAgent, @PathVariable String page){
		return getPageByUserAgent(userAgent,page);
	}
}

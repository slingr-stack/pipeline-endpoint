package io.slingr.endpoints.pipeline;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.exceptions.ErrorCode;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.rest.RestMethod;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Pipeline endpoint
 *
 * Created by dgaviola on 10/25/17.
 */
@SlingrEndpoint(name = "pipeline", functionPrefix = "_")
public class PipelineEndpoint extends HttpEndpoint {

    private static final Logger logger = LoggerFactory.getLogger(PipelineEndpoint.class);

    private static final String PIPELINE_API_URL = "https://api.pipelinecrm.com/api/v3/";

    @ApplicationLogger
    private AppLogs appLogger;

    @EndpointProperty
    private String apiKey;

    @EndpointProperty
    private String appKey;
    private Json body;

    @Override
    public String getApiUri() {
        return PIPELINE_API_URL;
    }

    @Override
    public void endpointStarted() {
        httpService().setAllowExternalUrl(true);
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        Json body = request.getJsonParams();
        String path = body.string("path");
        path = path + "/?api_key=" + apiKey + "&app_key=" + appKey;
        body.set("path", path);
        return defaultGetRequest(request);
    }

    @EndpointFunction(name = "_rawget")
    public Json rawget(FunctionRequest request) {
        Json body = request.getJsonParams();
        String path = body.string("path");
        path = path + "&api_key=" + apiKey + "&app_key=" + appKey;
        body.set("path", path);
        return defaultGetRequest(request);
    }
    
    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        Json body = request.getJsonParams();
        String path = body.string("path");
        path = path + "/?api_key=" + apiKey + "&app_key=" + appKey;
        body.set("path", path);
        return defaultPostRequest(request);
    }
    
    @EndpointWebService(path = "/", methods = RestMethod.POST)
    public String webhookProcessor(WebServiceRequest request){
        Json body = request.getJsonBody();
            events().send("webhook", body);
        return "ok";
    }

    private void setRequestHeaders(FunctionRequest request) {
        Json body = request.getJsonParams();
        Json headers = body.json("headers");
        if (headers == null) {
            headers = Json.map();
        }
        headers.set("Authorization", "API-Key " + apiKey);
        headers.set("Authorization", "APP-Key " + appKey);
        headers.set("Content-Type", "application/json");
        if (headers.isEmpty("Accept")) {
            headers.set("Accept", "application/json");
        }
        body.set("headers", headers);

    }
}

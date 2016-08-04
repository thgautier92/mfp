/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @param tag: a topic such as MobileFirst_Platform, Bluemix, Cordova.
 * @returns json list of items.
 */

function getPath(params) {
	var request = MFP.Server.getClientRequest();
	return {
		userAgent: request.getHeader("User-Agent"),
		path:request.getContextPath(),
		query: request.getQueryString(),
		requestURI : request.getRequestURI(),
		requestURL	: request.getRequestURL(),
		pathInfo : request.getPathInfo(),
		params : JSON.parse(params)
	};
}
function getMethod(params) {
	var par=JSON.parse(params);
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : 'apps/api/v2/'+par.api
	};
	return MFP.Server.invokeHttp(input);
}


/**
 * @returns ok
 */
function unprotected(param) {
	return { result: "Hello from apiProxy unprotected resource. Params = ['{\"db\":\"toto\",\"ope\":\"list\"}']" };
}
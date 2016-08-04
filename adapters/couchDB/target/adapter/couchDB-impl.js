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
var params = {
		"user": "tgautier",
		"password": "Tga051163"
	};
function getDb(tag) {
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : getPath(tag)
	};
	return MFP.Server.invokeHttp(input);
}
function getDbDocs(base, range, skip, displayDocs) {
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : base + "/_all_docs?include_docs=" + displayDocs + "&limit=" + range + "&skip=" + skip
	};
	return MFP.Server.invokeHttp(input);
}
function getDbDoc(base, key,file) {
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : base + "/"+key+"/"+file
	};
	return MFP.Server.invokeHttp(input);
}

/**
 * Helper function to build the URL path.
 */
function getPath(tag){
    if(tag === undefined || tag === ''){
        return '/';
    } else {
        return '/'+tag;
    }
}

/**
 * @returns ok
 */
function unprotected(param) {
	return {result : "Hello from unprotected resource"};
}
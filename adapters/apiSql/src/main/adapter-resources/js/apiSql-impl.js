/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2015. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
//var procedure1Statement = "select * from ? limit ?"; ,
//		parameters : [table,param]
// 		example : ["clients",10]
function getAll(table,param) {
	var procedure1Statement = "select * from "+table+" limit "+param;
	return MFP.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
function procedure2(param) {
	return MFP.Server.invokeSQLStoredProcedure({
		procedure : "storedProcedure2",
		parameters : [param]
	});
}

/************************************************************************
 * Implementation code for procedure - 'unprotected'
 *
 *
 * @return - invocationResult
 */
function unprotected(param1,param2) {
	return {result : "Hello from unprotected resource",param1:param1,param2:param2};
}



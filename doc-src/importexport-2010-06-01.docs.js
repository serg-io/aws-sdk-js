/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */


AWS = {};

/**
 * Constructs a service interface object. Each API operation is exposed as a
 * function on service.
 *
 * ### Sending a Request Using ImportExport
 *
 * ```js
 * var importexport = new AWS.ImportExport();
 * importexport.getStatus(params, function (err, data) {
 *   if (err) {
 *     console.log(err); // an error occurred
 *   } else {
 *     console.log(data); // successful response
 *   }
 * });
 * ```
 * @!method cancelJob(params, callback)
 *   Calls the CancelJob API operation.
 *   @param params [Object]
 *     * `JobId` &mdash; **required** &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Success` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createJob(params, callback)
 *   Calls the CreateJob API operation.
 *   @param params [Object]
 *     * `JobType` &mdash; **required** &mdash; (`String`)
 *       Possible values include:
 *       * `Import`
 *       * `Export`
 *     * `Manifest` &mdash; **required** &mdash; (`String`)
 *     * `ManifestAddendum` &mdash; (`String`)
 *     * `ValidateOnly` &mdash; **required** &mdash; (`Boolean`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `JobId` &mdash; (`String`)
 *       * `JobType` &mdash; (`String`)
 *         Possible values include:
 *         * `Import`
 *         * `Export`
 *       * `AwsShippingAddress` &mdash; (`String`)
 *       * `Signature` &mdash; (`String`)
 *       * `SignatureFileContents` &mdash; (`String`)
 *       * `WarningMessage` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getStatus(params, callback)
 *   Calls the GetStatus API operation.
 *   @param params [Object]
 *     * `JobId` &mdash; **required** &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `JobId` &mdash; (`String`)
 *       * `JobType` &mdash; (`String`)
 *         Possible values include:
 *         * `Import`
 *         * `Export`
 *       * `AwsShippingAddress` &mdash; (`String`)
 *       * `LocationCode` &mdash; (`String`)
 *       * `LocationMessage` &mdash; (`String`)
 *       * `ProgressCode` &mdash; (`String`)
 *       * `ProgressMessage` &mdash; (`String`)
 *       * `Carrier` &mdash; (`String`)
 *       * `TrackingNumber` &mdash; (`String`)
 *       * `LogBucket` &mdash; (`String`)
 *       * `LogKey` &mdash; (`String`)
 *       * `ErrorCount` &mdash; (`Integer`)
 *       * `Signature` &mdash; (`String`)
 *       * `SignatureFileContents` &mdash; (`String`)
 *       * `CurrentManifest` &mdash; (`String`)
 *       * `CreationDate` &mdash; (`Date`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listJobs(params, callback)
 *   Calls the ListJobs API operation.
 *   @param params [Object]
 *     * `MaxJobs` &mdash; (`Integer`)
 *     * `Marker` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Jobs` &mdash; (`Array<map>`)
 *           * `JobId` &mdash; (`String`)
 *           * `CreationDate` &mdash; (`Date`)
 *           * `IsCanceled` &mdash; (`Boolean`)
 *           * `JobType` &mdash; (`String`)
 *             Possible values include:
 *             * `Import`
 *             * `Export`
 *       * `IsTruncated` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateJob(params, callback)
 *   Calls the UpdateJob API operation.
 *   @param params [Object]
 *     * `JobId` &mdash; **required** &mdash; (`String`)
 *     * `Manifest` &mdash; **required** &mdash; (`String`)
 *     * `JobType` &mdash; **required** &mdash; (`String`)
 *       Possible values include:
 *       * `Import`
 *       * `Export`
 *     * `ValidateOnly` &mdash; **required** &mdash; (`Boolean`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Error] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Success` &mdash; (`Boolean`)
 *       * `WarningMessage` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 *
 * @!method constructor(options)
 *   Constructs a service object. This object has one method for each
 *   API operation.
 *   @option options [String] endpoint The endpoint URI to send requests
 *     to.  The default endpoint is built from the configured `region`.
 *     The endpoint should be a string like `'https://s3.amazonaws.com'`.
 *   @option (see AWS.Config.constructor)
 *
 * @!attribute endpoint
 *   @return [AWS.Endpoint] an Endpoint object representing'
 *     the endpoint URL for service requests.'
 *
 */
AWS.ImportExport_20100601 = inherit(AWS.Service, {});

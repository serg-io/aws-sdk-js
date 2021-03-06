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
 * ### Sending a Request Using STS
 *
 * ```js
 * var sts = new AWS.STS();
 * sts.getFederationToken(params, function (err, data) {
 *   if (err) {
 *     console.log(err); // an error occurred
 *   } else {
 *     console.log(data); // successful response
 *   }
 * });
 * ```
 * @!method assumeRole(params, callback)
 *   Calls the AssumeRole API operation.
 *   @param params [Object]
 *     * `RoleArn` &mdash; **required** &mdash; (`String`) The Amazon
 *       Resource Name (ARN) of the role that the caller is assuming.
 *     * `RoleSessionName` &mdash; **required** &mdash; (`String`) An
 *       identifier for the assumed role session. The session name is
 *       included as part of the AssumedRoleUser.
 *     * `Policy` &mdash; (`String`) A supplemental policy that can be
 *       associated with the temporary security credentials. The caller
 *       can restrict the permissions that are available on the role's
 *       temporary security credentials to maintain the least amount of
 *       privileges. When a service call is made with the temporary
 *       security credentials, both the role's permission policy and
 *       supplemental policy are checked. For more information about how
 *       permissions work in the context of temporary credentials, see
 *       Controlling Permissions in Temporary Credentials.
 *     * `DurationSeconds` &mdash; (`Integer`) The duration, in seconds,
 *       of the role session. The value can range from 900 seconds (15
 *       minutes) to 3600 seconds (1 hour). By default, the value is set
 *       to 3600 seconds (1 hour).
 *     * `ExternalId` &mdash; (`String`) A unique identifier that is
 *       generated by a third party for each of their customers. For each
 *       role that the third party can assume, they should instruct their
 *       customers to create a role with the external ID that was
 *       generated by the third party. Each time the third party assumes
 *       the role, they must pass the customer's correct external ID. The
 *       external ID is useful in order to help third parties bind a role
 *       to the customer who created it. For more information about the
 *       external ID, see About the External ID in Using Temporary
 *       Security Credentials.
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
 *       * `Credentials` &mdash; (`map`) The temporary security
 *         credentials, which includes an Access Key ID, a Secret Access
 *         Key, and a security token.
 *           * `AccessKeyId` &mdash; (`String`) AccessKeyId ID that
 *             identifies the temporary credentials.
 *           * `SecretAccessKey` &mdash; (`String`) The Secret Access Key
 *             to sign requests.
 *           * `SessionToken` &mdash; (`String`) The security token that
 *             users must pass to the service API to use the temporary
 *             credentials.
 *           * `Expiration` &mdash; (`Date`) The date on which these
 *             credentials expire.
 *       * `AssumedRoleUser` &mdash; (`map`) The Amazon Resource Name (ARN)
 *         and the assumed role ID for the temporary security credentials.
 *         The ARN and the role ID are identifiers for the temporary
 *         security credentials so that you can refer to the temporary
 *         credentials in a policy. For example, if you want to build a
 *         policy that applies to these temporary credentials, you would
 *         specify the AssumedRoleUser ARN or role ID in that policy.
 *           * `AssumedRoleId` &mdash; (`String`) A unique identifier that
 *             contains the role ID and the role session name of the role
 *             that is being assumed. The role ID was generated by AWS when
 *             the role was created.
 *           * `Arn` &mdash; (`String`) The ARN of the temporary security
 *             credentials that are returned from the AssumeRole action.
 *             For more information about ARNs and how to use them in
 *             policies, see Identifiers for IAM Entities in Using IAM.
 *       * `PackedPolicySize` &mdash; (`Integer`) A percentage value that
 *         indicates the size of the policy in packed form. The service
 *         rejects any policy with a packed size greater than 100 percent,
 *         which means the policy exceeded the allowed space.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getFederationToken(params, callback)
 *   Calls the GetFederationToken API operation.
 *   @param params [Object]
 *     * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *       federated user associated with the credentials. For information
 *       about limitations on user names, go to Limitations on IAM
 *       Entities in Using IAM.
 *     * `Policy` &mdash; (`String`) A policy specifying the permissions
 *       to associate with the credentials. The caller can delegate their
 *       own permissions by specifying a policy, and both policies will
 *       be checked when a service call is made. For more information
 *       about how permissions work in the context of temporary
 *       credentials, see Controlling Permissions in Temporary
 *       Credentials in Using IAM.
 *     * `DurationSeconds` &mdash; (`Integer`) The duration, in seconds,
 *       that the session should last. Acceptable durations for
 *       federation sessions range from 900s (15 minutes) to 129600s (36
 *       hours), with 43200s (12 hours) as the default. Sessions for AWS
 *       account owners are restricted to a maximum of 3600s (one hour).
 *       If the duration is longer than one hour, the session for AWS
 *       account owners defaults to one hour.
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
 *       * `Credentials` &mdash; (`map`) Credentials for the service API
 *         authentication.
 *           * `AccessKeyId` &mdash; (`String`) AccessKeyId ID that
 *             identifies the temporary credentials.
 *           * `SecretAccessKey` &mdash; (`String`) The Secret Access Key
 *             to sign requests.
 *           * `SessionToken` &mdash; (`String`) The security token that
 *             users must pass to the service API to use the temporary
 *             credentials.
 *           * `Expiration` &mdash; (`Date`) The date on which these
 *             credentials expire.
 *       * `FederatedUser` &mdash; (`map`) Identifiers for the federated
 *         user associated with the credentials. You can use the federated
 *         user's ARN in your resource policies.
 *           * `FederatedUserId` &mdash; (`String`) The string identifying
 *             the federated user associated with the credentials, similar
 *             to the UserId of an IAM user.
 *           * `Arn` &mdash; (`String`) The ARN specifying the federated
 *             user associated with the credentials. For more information
 *             about ARNs and how to use them in policies, see Identifiers
 *             for IAM Entities in Using IAM.
 *       * `PackedPolicySize` &mdash; (`Integer`) A percentage value
 *         indicating the size of the policy in packed form. Policies for
 *         which the packed size is greater than 100% of the allowed value
 *         are rejected by the service.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getSessionToken(params, callback)
 *   Calls the GetSessionToken API operation.
 *   @param params [Object]
 *     * `DurationSeconds` &mdash; (`Integer`) The duration, in seconds,
 *       that the credentials should remain valid. Acceptable durations
 *       for IAM user sessions range from 900s (15 minutes) to 129600s
 *       (36 hours), with 43200s (12 hours) as the default. Sessions for
 *       AWS account owners are restricted to a maximum of 3600s (one
 *       hour). If the duration is longer than one hour, the session for
 *       AWS account owners defaults to one hour.
 *     * `SerialNumber` &mdash; (`String`) The identification number of
 *       the MFA device for the user. If the IAM user has a policy
 *       requiring MFA authentication (or is in a group requiring MFA
 *       authentication) to access resources, provide the device value
 *       here. The value is in the Security Credentials tab of the user's
 *       details pane in the IAM console. If the IAM user has an active
 *       MFA device, the details pane displays a Multi-Factor
 *       Authentication Device value. The value is either for a virtual
 *       device, such as arn:aws:iam::123456789012:mfa/user, or it is the
 *       device serial number for a hardware device (usually the number
 *       from the back of the device), such as GAHT12345678. For more
 *       information, see Using Multi-Factor Authentication (MFA) Devices
 *       with AWS in Using IAM.
 *     * `TokenCode` &mdash; (`String`) The value provided by the MFA
 *       device. If the user has an access policy requiring an MFA code
 *       (or is in a group requiring an MFA code), provide the value here
 *       to get permission to resources as specified in the access
 *       policy. If MFA authentication is required, and the user does not
 *       provide a code when requesting a set of temporary security
 *       credentials, the user will receive an "access denied" response
 *       when requesting resources that require MFA authentication. For
 *       more information, see Using Multi-Factor Authentication (MFA)
 *       Devices with AWS in Using IAM.
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
 *       * `Credentials` &mdash; (`map`) The session credentials for API
 *         authentication.
 *           * `AccessKeyId` &mdash; (`String`) AccessKeyId ID that
 *             identifies the temporary credentials.
 *           * `SecretAccessKey` &mdash; (`String`) The Secret Access Key
 *             to sign requests.
 *           * `SessionToken` &mdash; (`String`) The security token that
 *             users must pass to the service API to use the temporary
 *             credentials.
 *           * `Expiration` &mdash; (`Date`) The date on which these
 *             credentials expire.
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
AWS.STS_20110615 = inherit(AWS.Service, {});

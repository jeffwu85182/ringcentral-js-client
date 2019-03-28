import GetConferencingInfoResponse from "../definitions/GetConferencingInfoResponse";
import UpdateConferencingInfoRequest from "../definitions/UpdateConferencingInfoRequest";
import PathSegment from "../PathSegment";
export default class Conferencing extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  <p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p><p>Returns the information on the Free Conference Calling (FCC) feature for a given extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    get(query?: GetQuery): Promise<GetConferencingInfoResponse>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p><p>Returns the information on the Free Conference Calling (FCC) feature for a given extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     */
    put(body: UpdateConferencingInfoRequest): Promise<GetConferencingInfoResponse>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    putRaw(body: UpdateConferencingInfoRequest): Promise<any>;
}
export interface GetQuery {
    /**
     * Internal identifier of a country. If not specified, the response is returned for the brand country
     */
    countryId?: string;
}

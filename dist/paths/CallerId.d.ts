import ExtensionCallerIdInfo from "../definitions/ExtensionCallerIdInfo";
import PathSegment from "../PathSegment";
export default class CallerId extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Returns information on an outbound caller ID of an extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Light</p>
     */
    get(): Promise<ExtensionCallerIdInfo>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Returns information on an outbound caller ID of an extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Updates outbound caller ID information of an extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    put(body: ExtensionCallerIdInfo): Promise<ExtensionCallerIdInfo>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Updates outbound caller ID information of an extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    putRaw(body: ExtensionCallerIdInfo): Promise<any>;
}

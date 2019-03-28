interface ListCompanyAnsweringRuleInfo {
    /**
     * Internal identifier of an answering rule
     */
    id?: string;
    /**
     * Canonical URI of an answering rule
     */
    uri?: string;
    /**
     * Specifies if the rule is active or inactive. The default value is 'True'
     */
    enabled?: boolean;
    /**
     * Type of an answering rule, the default value is 'Custom' = ['BusinessHours', 'AfterHours', 'Custom']
     */
    type?: "BusinessHours" | "AfterHours" | "Custom";
    /**
     * Name of an answering rule specified by user. Max number of symbols is 30. The default value is 'My Rule N' where 'N' is the first free number
     */
    name?: string;
}
export default ListCompanyAnsweringRuleInfo;

import axios from "axios";

const ISSUE_API_BASE_URL = "http://localhost:8080/api/v1/issues"

class IssueService {

    saveIssue(issue) {
        return axios.post(ISSUE_API_BASE_URL, issue);
    }
}

export default new IssueService();
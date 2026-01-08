import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import DashboardLayout from "./app/layout"
import OverviewPage from "./app/overview/page"
import MailboxPage from "./app/mailbox/page"
import PatientsPage from "./app/patients/page"
import AnnotationToolPage from "./app/annotation/page"
import EstablishedConnectionsPage from "./app/connections/page"
import GlobalCommunityPage from "./app/global-community/page"
import LearningCommunityPage from "./app/learning-community/page"
import UltrasoundKnowledgePage from "./app/learning-community/ultrasound-knowledge"
import ProbefixDynamicPage from "./app/learning-community/probefix-dynamic"
import LearningCommunityInnerPage from "./app/learning-community/learning-community-page"

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<DashboardLayout />}>
                    <Route path="/" element={<Navigate to="/overview" replace />} />
                    <Route path="/overview" element={<OverviewPage />} />
                    <Route path="/mailbox" element={<MailboxPage />} />
                    <Route path="/patients" element={<PatientsPage />} />
                    <Route path="/annotation" element={<AnnotationToolPage />} />
                    <Route path="/connections" element={<EstablishedConnectionsPage />} />
                    <Route path="/global-community" element={<GlobalCommunityPage />} />
                    <Route path="/learning-community" element={<LearningCommunityPage />} />
                    <Route path="/learning-community/ultrasound-knowledge" element={<UltrasoundKnowledgePage />} />
                    <Route path="/learning-community/probefix-dynamic" element={<ProbefixDynamicPage />} />
                    <Route path="/learning-community/learning-community" element={<LearningCommunityInnerPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App

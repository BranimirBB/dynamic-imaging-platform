import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import DashboardLayout from "./app/layout"
import OverviewPage from "./app/overview/page"
import MailboxPage from "./app/mailbox/page"
import PatientsPage from "./app/patients/page"
import AnnotationToolPage from "./app/annotation/page"
import EstablishedConnectionsPage from "./app/connections/page"
import GlobalCommunityPage from "./app/global-community/page"
import LearningCommunityPage from "./app/learning/page"
import UltrasoundKnowledgePage from "./app/learning/ultrasound-knowledge"
import ProbefixDynamicPage from "./app/learning/probefix-dynamic"
import LearningCommunityInnerPage from "./app/learning/learning-community-page"
import WorkshopsPage from "./app/learning/workshops"

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
                    <Route path="/learning" element={<LearningCommunityPage />} />
                    <Route path="/learning/ultrasound-knowledge" element={<UltrasoundKnowledgePage />} />
                    <Route path="/learning/probefix-dynamic" element={<ProbefixDynamicPage />} />
                    <Route path="/learning/learning-community" element={<LearningCommunityInnerPage />} />
                    <Route path="/learning/workshops" element={<WorkshopsPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App

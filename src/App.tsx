import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import DashboardLayout from "./app/layout"
import OverviewPage from "./app/overview/page"
import MailboxPage from "./app/mailbox/page"
import PatientsPage from "./app/patients/page"
import HelmondPage from "./app/patients/helmond"
import PSVPage from "./app/patients/psv"
import AnnotationToolPage from "./app/annotation/page"
import EstablishedConnectionsPage from "./app/connections/page"
import GlobalCommunityPage from "./app/global-community/page"
import UltrasoundKnowledgePage from "./app/learning/ultrasound-knowledge"
import ProbefixUpperPage from "./app/learning/probefix-upper"
import ProbefixLowerPage from "./app/learning/probefix-lower"
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
                    <Route path="/patients/helmond" element={<HelmondPage />} />
                    <Route path="/patients/psv" element={<PSVPage />} />
                    <Route path="/annotation" element={<AnnotationToolPage />} />
                    <Route path="/connections" element={<EstablishedConnectionsPage />} />
                    <Route path="/global-community" element={<GlobalCommunityPage />} />
                    <Route path="/learning" element={<Navigate to="/learning/probefix-upper" replace />} />
                    <Route path="/learning/ultrasound-knowledge" element={<UltrasoundKnowledgePage />} />
                    <Route path="/learning/probefix-upper" element={<ProbefixUpperPage />} />
                    <Route path="/learning/probefix-lower" element={<ProbefixLowerPage />} />
                    <Route path="/learning/learning-community" element={<LearningCommunityInnerPage />} />
                    <Route path="/learning/workshops" element={<WorkshopsPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App

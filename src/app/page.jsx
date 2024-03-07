import Box from '@mui/material/Box';
import MissionStatement from './landing/MissionStatement.jsx';
import { EmployeeFAQ, CandidateFAQ } from "./landing/FAQ.jsx";

export default function Home() {
    return (
        <Box bgcolor="primary">
            <MissionStatement />
            <EmployeeFAQ />
            <CandidateFAQ />
        </Box>
  );
}

import { ProgressCircle } from "@/components/tremor/ProgressCircle";
import { createClient } from '@/utils/supabase/server';
import ProgressCircles from "@/components/dashboard/ProgressCircles";

export default async function EldersQuorumDashboard() {
    const supabase = await createClient();
    const effortDatabase = 'elders_quorum_efforts'
    const questionDatabase = 'elders_quorum_efforts_questions'
    const { data: questions } = await supabase.from(questionDatabase).select();
    const { data: efforts } = await supabase.from(effortDatabase).select();

    if (questions && efforts) {
        return (
            <ProgressCircles questions={questions} efforts={efforts} />
        )

    }
}
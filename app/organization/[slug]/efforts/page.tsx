import { ProgressCircle } from "@/components/tremor/ProgressCircle";
import { createClient } from '@/utils/supabase/server';
import ProgressCircles from "@/components/dashboard/ProgressCircles";
import DrawerHero from "@/components/composites/Drawer";
import { Button } from "@/components/tremor/Button";

export default async function EldersQuorumDashboard({ params }: { params: { slug: string } }) {
    const supabase = await createClient();
    const { slug } = await params
    const effortDatabase = slug + '-efforts'
    const questionDatabase = slug + '-efforts-questions'
    const { data: questions } = await supabase.from(questionDatabase).select();
    const { data: efforts } = await supabase.from(effortDatabase).select();

    if (questions && efforts) {
        return (
            <>
                <ProgressCircles questions={questions} efforts={efforts} slug={slug} />
            </>
        )

    }
}



import Form from '@/components/submit/NamesForm';
import { createClient } from '@/utils/supabase/server';
import { ChevronDownIcon } from '@heroicons/react/16/solid'

// export default async function Instruments() {
//     const supabase = await createClient();
//     const { error } = await supabase
//         .from('elders_quorum_efforts')
//         .insert({
//             effort1: true,
//             effort2: true,
//             effort3: true,
//             effort4: true,
//             effort5: true,
//             effort6: true,
//             effort7: false,
//             effort8: true,
//             effort9: true,
//             effort10: true,
//             effort11: true,
//             effort12: true,
//             effort13: false
//         })
//     console.log(error)
//     return <pre>{JSON.stringify(error, null, 2)}</pre>
// }


export default async function SubmissionForm({
    temple,
    slug,
}: {
    temple: any;
    slug: string;
}) {
    const supabase = await createClient();

    if (temple) {
        return (
            <Form names={temple} lagging={'temple'} slug={slug} />
        )
    }
    return "Sorry wrong endpoint"
}
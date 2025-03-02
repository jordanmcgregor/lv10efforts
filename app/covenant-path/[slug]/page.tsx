import { BarList } from "@/components/tremor/BarList"
import { createClient } from '@/utils/supabase/server';

const data = [
    { name: "/home", value: 843 },
    { name: "/imprint", value: 46 },
    { name: "/cancellation", value: 3 },
    { name: "/blocks", value: 108 },
    { name: "/documentation", value: 384 },
]

export default async function Bar({ params }: { params: any }) {
    const { slug } = await params
    const supabase = await createClient();
    const { data: sacrament } = await supabase.from(slug + "-names-tracker").select();

    const bottomDate = new Date(new Date().setDate(new Date().getDate() - 30))
    const topDate = new Date()
    const data = calculateTotals(sacrament, bottomDate)

    return (
        <>
            <div>
                <div className="block sm:flex sm:items-start sm:justify-between sm:space-x-6">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                            {slug == "sacrament" ?
                                "Sacrament Meeting Attendance"
                                :
                                "Temple Experiences"
                            }
                        </h3>
                        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                            Last 30 days
                        </p>
                    </div>

                    <div className="flex">
                        {/* <span className="mt-6 inline-flex w-full justify-center space-x-4 whitespace-nowrap rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-900 dark:border-gray-900 dark:text-gray-50 sm:mt-0 sm:w-fit sm:items-center">

                        <span tabIndex={1} className="flex items-center gap-1.5">
                            <span
                                aria-hidden={true}
                                className="size-2.5 rounded-sm bg-red-600 dark:bg-red-500"
                            />
                            0-50
                        </span>
                        <span tabIndex={1} className="flex items-center gap-1.5">
                            <span
                                aria-hidden={true}
                                className="size-2.5 rounded-sm bg-yellow-600 dark:bg-yellow-500"
                            />
                            50-75
                        </span>
                        <span tabIndex={1} className="flex items-center gap-1.5">
                            <span
                                aria-hidden={true}
                                className="size-2.5 rounded-sm bg-emerald-600 dark:bg-emerald-500"
                            />
                            75-100
                        </span>
                    </span> */}
                    </div>
                </div>
                <div className="mt-6">
                    <BarList
                        data={data}
                    />
                </div>
            </div>
        </>
    )
}


function calculateTotals(sacrament: any, bottomDate: any) {
    let dictionary: Record<string, number> = {}; // Ensure proper typing

    for (const element of sacrament) {
        const createdAtDate = new Date(element.created_at);
        if (createdAtDate > bottomDate) {
            if (element.successful) {
                if (!(element.name in dictionary)) {
                    dictionary[element.name] = 1;
                } else {
                    dictionary[element.name] += 1;
                }
            } else {
                if (!(element.name in dictionary)) {
                    dictionary[element.name] = 0; // Only set to 0 if it's not already counted
                }
            }
        }
        else {
            if (!(element.name in dictionary)) {
                dictionary[element.name] = 0;
            } else {
                dictionary[element.name] += 0;
            }
        }
    }

    let array = []
    for (const key in dictionary) {
        if (dictionary.hasOwnProperty(key)) { // Optional safety check
            array.push({ name: key, value: dictionary[key] })
        }
    }


    return array; // Returning the result if needed
}


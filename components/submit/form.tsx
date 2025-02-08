'use client'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useRouter } from 'next/navigation'

export default function Form({ questions, database }: { questions: any, database: any }) {
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page refresh
        const formData = new FormData(e.currentTarget);
        const formValues: Record<string, string> = {};
        formData.forEach((value, key) => {
            formValues[key] = value as string;
        });
        const response = await fetch("/api/supabase/insert?database=" + database, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValues),
        });
        const data = await response.json();
        if ((data.status.error == null)) {
            alert("Sorry something went wrong")
            console.log(data)
        }
        else {
            router.push("/success");
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} action="" className="flex flex-col space-y-4">
                {questions.map((question: any) => (
                    <div key={question.id} className="">
                        <label htmlFor={question.effort} className="block text-sm/6 font-medium text-gray-900">
                            {question.question}
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                            <select
                                id={question.effort}
                                name={question.effort}
                                defaultValue=""
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                required>
                                <option value="" disabled>
                                    Select
                                </option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                        </div>
                    </div>
                ))}
                <button
                    type="submit"
                    className="rounded-md bg-indigo-500 text-white uppercase px-3.5 py-2.5 my-6 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-400"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
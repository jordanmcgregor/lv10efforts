'use client'
import { useState } from 'react';
import { useToast } from "@/lib/useToast"
import { Toaster } from "@/components/tremor/Toaster";
import { useRouter } from 'next/navigation';

export default function Form({
    names,
    lagging,
    slug,
}: {
    names: any;
    lagging: any;
    slug: string;
}) {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const { toast } = useToast();
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const formValues: Array<any> = [];

        formData.forEach((value, key) => {

            formValues.push({ name: key, organization: slug, successful: value })

        });

        // formValues[]
        const response = await fetch(`/api/supabase/insert?database=${lagging}-names-tracker`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValues),
        });

        const data = await response.json();

        if (data.status === 400) {
            toast({
                title: "Error",
                description: data.message?.error?.message || "An error occurred",
                variant: "error",
                duration: 3000,
            });
            setIsSubmitting(false);
        } else {
            toast({
                title: "Success",
                description: "Your submission was successful",
                variant: "success",
                duration: 3000,
            });

            // Trigger the refetch callback passed down from the parent component
            window.location.reload();
            // window.location.href = window.location.href; // Reset the submitting state
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className={isSubmitting ? 'opacity-50 flex flex-col space-y-4' : "flex flex-col space-y-4"}>
                    {names.map((name: any) => (
                        name.current ?
                            <div key={name.id}>
                                <label htmlFor={name.name} className="block text-sm font-medium text-gray-900">
                                    {lagging == 'sacrament'?
                                    "Did " + name.name + " attend sacrament meeting this week?"
                                    :
                                    "Did " + name.name + " have a temple experience this week?"
                                    }
                                </label>
                                <div className="mt-2 grid grid-cols-1">

                                    <select
                                        id={name.name}
                                        name={name.name}
                                        defaultValue=""
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select
                                        </option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                            </div>
                            :
                            null
                    ))}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="disabled:pointer-events-none disabled:shadow-none relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out border border-transparent text-white dark:text-white bg-blue-500 dark:bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600 disabled:bg-blue-300 disabled:text-white disabled:dark:bg-blue-800 disabled:dark:text-blue-400"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Toaster />
        </>
    );
}

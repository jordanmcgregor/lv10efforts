// 'use client'
import { ProgressCircle } from "@/components/tremor/ProgressCircle";
import { Card } from "@/components/tremor/Card";
// import { useState } from 'react'

export default function ProgressCircles({ questions, efforts }: { questions: any, efforts: any }) {
    const bottomDate = new Date(new Date().setDate(new Date().getDate() - 30))
    const topDate = new Date()
    // const [bottomDate, setBottomDate] = useState(new Date(new Date().setDate(new Date().getDate() - 30)))
    // const [topDate, setTopDate] = useState(new Date())

    console.log(questions)
    return (
        <div>
            <div className="block sm:flex sm:items-start sm:justify-between sm:space-x-6">
                <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                        Efforts Status and Progress
                    </h3>
                    <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                        Last 30 days
                    </p>
                </div>
                <span className="mt-6 inline-flex w-full justify-center space-x-4 whitespace-nowrap rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-900 dark:border-gray-900 dark:text-gray-50 sm:mt-0 sm:w-fit sm:items-center">
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
                </span>
            </div>


            {/* <div className="flex flex-wrap justify-center gap-8">
                {
                    questions.map((question: any) => (
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-center">{question.question}</div>
                            <div className="relative mt-4" key={question.id}>
                                <div className="">
                                    <div>
                                        < ProgressCircle radius={40} value={calculateValue(question.effort, efforts, bottomDate, topDate, question.target)} max={question.target} >

                                        </ProgressCircle>
                                    </div>
                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{((calculateValue(question.effort, efforts, bottomDate, topDate, question.target) / question.target) * 100).toFixed(0)}%</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> */}
            <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {questions.map((question: any) => (
                    <Card key={question.question}>
                        <dt className="text-sm text-gray-500 dark:text-gray-500">
                            {question.question}
                        </dt>
                        <dd className="mt-3 flex items-center justify-between">
                            <p className="text-3xl font-medium text-gray-900 dark:text-gray-50">
                                {calculateValue(question.effort, efforts, bottomDate, topDate, question.target)}
                                <span className="text-base text-gray-500 dark:text-gray-500">
                                    /{question.target}
                                </span>
                            </p>
                            <ProgressCircle
                                value={calculateValue(question.effort, efforts, bottomDate, topDate, question.target)}
                                radius={40}
                                max={question.target}
                                strokeWidth={5}
                                variant={
                                    parseFloat(((calculateValue(question.effort, efforts, bottomDate, topDate, question.target) / question.target) * 100).toFixed(0)) >= 75
                                        ? 'success'
                                        : parseFloat(((calculateValue(question.effort, efforts, bottomDate, topDate, question.target) / question.target) * 100).toFixed(0)) >= 50
                                            ? 'warning'
                                            : 'error'
                                }
                            >
                                <span className="text-xs font-medium text-gray-900 dark:text-gray-50">
                                    {parseFloat(((calculateValue(question.effort, efforts, bottomDate, topDate, question.target) / question.target) * 100).toFixed(0))}%
                                </span>
                            </ProgressCircle>
                        </dd>
                    </Card>
                ))}
            </dl>
        </div >
    )
}

function calculateValue(effortName: any, efforts: any, bottomDate: any, topDate: any, target: any) {
    let totalValue = 0
    for (let i = 0; i < efforts.length; i++) {
        const createdAtDate = new Date(efforts[i].created_at);
        if (createdAtDate > bottomDate && createdAtDate < topDate) {
            if (efforts[i][effortName] == true) {
                totalValue += 1
            }
            else if (Number.isInteger(efforts[i][effortName])) {
                totalValue += efforts[i][effortName]
            }
        }
    }
    return totalValue
}






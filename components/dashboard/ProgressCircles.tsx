// 'use client'
import { ProgressCircle } from "@/components/tremor/ProgressCircle";
// import { useState } from 'react'

export default function ProgressCircles({ questions, efforts }: { questions: any, efforts: any }) {
    const bottomDate = new Date(new Date().setDate(new Date().getDate() - 30))
    const topDate = new Date()
    // const [bottomDate, setBottomDate] = useState(new Date(new Date().setDate(new Date().getDate() - 30)))
    // const [topDate, setTopDate] = useState(new Date())

    console.log(questions)
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-8">
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
            </div>
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
// 'use client';

import { Card } from '@/components/tremor/Card';
import { ProgressCircle } from '@/components/tremor/ProgressCircle';

export default function Example() {
    return (
        <>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        SLA Performance
                    </dt>
                    <div className="mt-4 flex flex-nowrap items-center justify-between gap-y-4">
                        <dd className="space-y-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                                        aria-hidden="true"
                                    />
                                    <span className="text-sm text-gray-900 dark:text-gray-50">
                                        Within SLA
                                    </span>
                                </div>
                                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                                    83.3%
                                </span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                                        aria-hidden="true"
                                    />
                                    <span className="text-sm text-gray-900 dark:text-gray-50">
                                        SLA Breached
                                    </span>
                                </div>
                                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                                    16.7%
                                </span>
                            </div>
                        </dd>
                        <ProgressCircle value={83} radius={45} strokeWidth={7} />
                    </div>
                </Card>
                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Response Time
                    </dt>
                    <div className="mt-4 flex flex-nowrap items-center justify-between gap-y-4">
                        <dd className="space-y-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                                        aria-hidden="true"
                                    />
                                    <span className="text-sm text-gray-900 dark:text-gray-50">
                                        Under Threshold
                                    </span>
                                </div>
                                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                                    95.8%
                                </span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                                        aria-hidden="true"
                                    />
                                    <span className="text-sm text-gray-900 dark:text-gray-50">
                                        Over Threshold
                                    </span>
                                </div>
                                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                                    4.2%
                                </span>
                            </div>
                        </dd>
                        <ProgressCircle value={96} radius={45} strokeWidth={7} />
                    </div>
                </Card>
                <Card>
                    <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                        Cache Performance
                    </dt>
                    <div className="mt-4 flex flex-nowrap items-center justify-between gap-y-4">
                        <dd className="space-y-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                                        aria-hidden="true"
                                    />
                                    <span className="text-sm text-gray-900 dark:text-gray-50">
                                        Cache Hits
                                    </span>
                                </div>
                                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                                    78.4%
                                </span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                                        aria-hidden="true"
                                    />
                                    <span className="text-sm text-gray-900 dark:text-gray-50">
                                        Cache Misses
                                    </span>
                                </div>
                                <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                                    21.6%
                                </span>
                            </div>
                        </dd>
                        <ProgressCircle value={78} radius={45} strokeWidth={7} />
                    </div>
                </Card>
            </dl>
            <div className="block sm:flex sm:items-start sm:justify-between sm:space-x-6">
                <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                        Web vitals scores
                    </h3>
                    <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor.
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
                            className="size-2.5 rounded-sm bg-orange-600 dark:bg-orange-500"
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
            <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((item) => (
                    <Card key={item.name}>
                        <dt className="text-sm text-gray-500 dark:text-gray-500">
                            {item.name}
                        </dt>
                        <dd className="mt-3 flex items-center justify-between">
                            <p className="text-3xl font-medium text-gray-900 dark:text-gray-50">
                                {item.value}
                                <span className="text-base text-gray-500 dark:text-gray-500">
                                    /100
                                </span>
                            </p>
                            <ProgressCircle
                                value={item.value}
                                radius={25}
                                strokeWidth={5}
                                color={
                                    item.value >= 75
                                        ? 'emerald'
                                        : item.value > 50
                                            ? 'orange'
                                            : 'red'
                                }
                            >
                                <span className="text-xs font-medium text-gray-900 dark:text-gray-50">
                                    {item.value}
                                </span>
                            </ProgressCircle>
                        </dd>
                    </Card>
                ))}
            </dl>
        </>
    );
}




const data = [
    {
        name: 'Performance',
        value: 91,
    },
    {
        name: 'Accessibility',
        value: 65,
    },
    {
        name: 'SEO',
        value: 43,
    },
];

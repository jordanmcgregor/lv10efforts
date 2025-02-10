import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const supabase = await createClient();
    const database = request.nextUrl.searchParams.get('database')
    const body = await request.json();

    if (!database) {
        return NextResponse.json({ error: 'Database name is required' }, { status: 400 });
    }
    try {
        const response = await supabase.from(database).insert(body);
        console.log(response)
        return NextResponse.json({ message: response, status: response.status });
    } catch (error) {
        return NextResponse.json({ message: error, status: 400 });
    }


}
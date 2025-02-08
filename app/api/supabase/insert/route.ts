import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const supabase = await createClient();
    const database = request.nextUrl.searchParams.get('database')
    const body = await request.json();

    if (!database) {
        return NextResponse.json({ error: 'Database name is required' }, { status: 400 });
    }
    const response = await supabase.from(database).insert(body);
    return NextResponse.json({ status: response });
}
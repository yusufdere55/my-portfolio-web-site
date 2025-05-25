import { prisma } from "lib/prisma"
import { NextResponse } from 'next/server';

export async function GET() {
    const skills = await prisma.skill.findMany()
    return NextResponse.json(skills);
}
import { NextResponse } from 'next/server';
import navItems from '../data/navItems.json';

export async function GET() {
  return NextResponse.json(navItems);
}

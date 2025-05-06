import { NextResponse } from 'next/server';
import userData from '@/dataFromServer/mockUserData.json';
import accountData from '@/dataFromServer/mockUserAcounts.json';

export async function GET() {
  const userWithAccounts = {
    ...userData,
    accounts: accountData,
  };
  return NextResponse.json(userWithAccounts);
}
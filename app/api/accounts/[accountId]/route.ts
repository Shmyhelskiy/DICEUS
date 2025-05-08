import { NextResponse } from 'next/server';
import accountData from '@/dataFromServer/mockUserAcounts.json';
import { AccountData, AccountsApiResponse } from '@/app/types/accounts/accounts';

export async function GET(
  request: Request,
  context: { params: Promise<{ accountId: string }> }
) {
  const { accountId } = await context.params;
  const allAccounts = accountData as AccountsApiResponse;
  const foundAccount = allAccounts.find(
    (account: AccountData) => account.id === accountId
  );

  if (foundAccount) {
    return NextResponse.json(foundAccount);
  } else {
    return new NextResponse(JSON.stringify({ message: 'Account not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
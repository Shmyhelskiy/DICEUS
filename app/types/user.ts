import { AccountsApiResponse } from "./accounts";

interface Originator {
  userId: string;
  firstName: string;
  lastName: string;
}

export type TaskStatus = 'New' | 'Pending Review' | 'Completed';

export interface Task {
  taskId: string;
  originator: Originator;
  client: string;
  line: string;
  type: string;
  status: TaskStatus;
  createdDate: string;
}

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  initials: string;
  email: string;
  role: string;
  assignedTasks: Task[];
  accounts: AccountsApiResponse;
}

export type UserIdOnly = Pick<UserData, 'id'>;


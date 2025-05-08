export function getInitials(firstName: string, lastName: string,useId: string,  originatorId?: string): string {
  if (useId === originatorId) {
    return 'ME';
  };

  return firstName[0].toUpperCase() + lastName[0].toUpperCase();
};

export function getFullName(firstName?: string | null, lastName?: string | null): string {
  const first = firstName 
    ? firstName.charAt(0).toUpperCase() + firstName.slice(1)
    : '';

  const last = lastName 
    ? lastName.charAt(0).toUpperCase() + lastName.slice(1)
    : '';

  return `${first} ${last}`.trim();
}


export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-');
  return `${month}/${day}/${year}`;
}

export const normalizedNumber = (num: number): string => {
  return '$' + num.toLocaleString('en-US');;
};
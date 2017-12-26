export type statusMember = 'Leader' | 'Co-Leader' | 'Elder' | 'Member';
export interface MemberModel {
  id?: string;
  name: string;
  role?: statusMember;
  profileLink?: string;
}

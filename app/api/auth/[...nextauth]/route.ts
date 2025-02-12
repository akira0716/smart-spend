import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import { SupabaseAdapter } from '@auth/supabase-adapter';

export const authOptions = {
  providers: [
    GoogleProvider({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_ROLE_KEY!,
  }),
  callbacks: {
    // リダイレクト先を指定するコールバック
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // 認証後のリダイレクト先を指定（例えばダッシュボードページ）
      if (url.startsWith(baseUrl)) {
        // 認証後、デフォルトでダッシュボードにリダイレクト
        return `${baseUrl}/dashboard/home`;
      }
      // 他のURLにリダイレクトしたい場合はそのURLを返す
      return url;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

# Atlas

A connected workspace where teams can create, collaborate, and share effortlessly.

## Prerequisites

- Node.js 18+ and npm
- Convex account and project
- Clerk account and project
- EdgeStore account

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_EDGESTORE_ACCESS_KEY=your_edgestore_access_key
NEXT_PUBLIC_EDGESTORE_SECRET_KEY=your_edgestore_secret_key
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/DebojyotiMishra/atlas.git
cd atlas
```

2. Install dependencies:
```bash
npm install
```

3. Install EdgeStore packages:
```bash
npm install @edgestore/server @edgestore/react
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Features

- Real-time collaboration
- Document management
- Image uploads with EdgeStore
- Authentication with Clerk
- Database with Convex

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Convex
- Clerk
- EdgeStore
- Zustand

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

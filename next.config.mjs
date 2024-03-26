/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: "",
                pathname:
                    "/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**",
            },
        ],
    },
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        API_URL: process.env.API_URL,
        API_POKEMON_URL: process.env.API_POKEMON_URL,
    },
};

export default nextConfig;

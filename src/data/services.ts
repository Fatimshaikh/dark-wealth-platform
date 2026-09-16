export interface Service {
    number: string;
    title: string;
    description: string;
}

export const services: Service[] = [
    {
        number: "01",
        title: "Portfolio Management",
        description:
            "Disciplined, long-horizon allocation across public and private markets, tailored to each family's risk profile.",
    },
    {
        number: "02",
        title: "Estate Planning",
        description:
            "Multi-generational structuring designed to preserve and transfer wealth with clarity and minimal friction.",
    },
    {
        number: "03",
        title: "Tax Strategy",
        description:
            "Proactive tax positioning integrated directly into investment and estate decisions, not treated as an afterthought.",
    },
    {
        number: "04",
        title: "Private Market Access",
        description:
            "Curated access to private equity, venture, and real assets typically reserved for institutional investors.",
    },
];
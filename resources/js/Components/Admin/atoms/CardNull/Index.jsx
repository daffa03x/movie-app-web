import React from "react";
import CardTable from "../../organism/CardTable/Index";

export default function CardNull({ title, href }) {
    return (
        <CardTable HeadCardTitle={title} HrefCreate={href}>
            <h1 className="mb-28 mt-12 text-2xl text-center">
                No {title} data available
            </h1>
        </CardTable>
    );
}

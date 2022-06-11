import PlanItemAdd from "../../components/plan/plan_item_add";
import PlanItemMenuTab from "../../components/plan/plan_item_menu_tab";
import React, { useState } from 'react';

export default function Items() {
    const [menuOpen, setMenuOpen] = useState(false);

    return <>
        <div className="">
            <PlanItemAdd
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
        </div>
        {(menuOpen) ? <PlanItemMenuTab setMenuOpen={setMenuOpen} /> : <></>}
    </>
}
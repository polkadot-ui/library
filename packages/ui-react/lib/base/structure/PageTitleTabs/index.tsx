/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { Button } from "../../buttons/Button";
import { PageTitleProps, PageTitleTabProps } from "../../types";
import { valEmpty } from "../../../utils";
import "@polkadot-ui/core/css/base/structure/PageTitleTabs/index.css";

/**
 * @name PageTitleTabs
 * @summary The element in a page title. Inculding the ButtonTab.
 */
export const PageTitleTabs = ({ sticky, tabs = [] }: PageTitleProps) => (
  <section className={`core-page-title-tabs${valEmpty(sticky, "sticky")}`}>
    <div className="scroll">
      <div className="inner">
        {tabs.map(
          ({ active, onClick, title, badge }: PageTitleTabProps, i: number) => (
            <Button
              type="tab"
              active={!!active}
              key={`page_tab_${i}`}
              onClick={() => onClick()}
              title={title}
              badge={badge}
            />
          )
        )}
      </div>
    </div>
  </section>
);
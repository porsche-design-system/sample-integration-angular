import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PorscheDesignSystemModule, THEME_TOKEN } from '@porsche-design-system/components-angular';
import { pdsTheme } from '@porsche-design-system/components-angular/ag-grid';
import { type DataAdvanced, dataAdvanced } from '../data/table-data-advanced';
import { type ICellRendererAngularComp } from 'ag-grid-angular';
import {
  AllCommunityModule,
  type ColDef,
  type ICellRendererParams,
  ModuleRegistry,
} from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

type ColumnDefs = DataAdvanced & {
  active: boolean;
};

@Component({
  selector: 'app-company-button-renderer',
  standalone: true,
  template: `
    <span class="cell-centered'">
      <p-link-pure
        [underline]="true"
        [theme]="(theme$ | async) ?? undefined"
        target="_blank"
        [href]="'https://www.porsche.com/germany/models/' + data.model.toLowerCase()"
      >
        More information
      </p-link-pure>
    </span>
  `,
  styles: [
    `
      img {
        object-fit: contain;
      }
      .cell-centered {
        height: 100%;
        display: flex;
        align-items: center;
      }
    `,
  ],
  imports: [PorscheDesignSystemModule, AsyncPipe],
})
class ButtonRenderer implements ICellRendererAngularComp {
  // Init Cell Value
  public data!: any;
  protected readonly theme$ = inject(THEME_TOKEN);

  agInit(params: ICellRendererParams): void {
    this.data = params.data;
  }

  // Return Cell Value
  refresh(params: ICellRendererParams): boolean {
    this.data = params.data;
    return true;
  }
}

@Component({
  selector: 'ag-grid-example',
  template: `
  <div [attr.data-ag-theme-mode]="(theme$ | async) === 'light' ? null : 'dark'">
    <ag-grid-angular
      style="width: 100%; height: 550px;"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      [pagination]="true"
      [theme]="agGridTheme"
    />
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AgGridPage {
  protected readonly theme$ = inject(THEME_TOKEN);
  protected readonly agGridTheme = pdsTheme;

  rowData = dataAdvanced.map((row, index) => ({ active: Boolean(index % 2) /* odd rows */, ...row }));
  // Columns to be displayed (Should match rowData properties)
  columnDefs: ColDef<ColumnDefs>[] = [
    {
      field: 'active',
      width: 170,
    },
    {
      field: 'model',
      editable: false,
    },
    {
      field: 'date',
      editable: false,
    },
    {
      field: 'interest',
      editable: false,
    },
    {
      field: 'vin',
      width: 250,
      editable: false,
    },
    {
      field: 'purchaseIntention',
      editable: false,
    },
    {
      field: 'status',
      editable: false,
    },
    {
      field: 'comment',
      filter: false,
      width: 500,
    },
    {
      field: 'leadId',
      headerName: 'More',
      cellRenderer: ButtonRenderer,
      editable: false,
      sortable: false,
      filter: false,
    },
  ];
  // Configurations applied to all columns
  defaultColDef = {
    filter: true,
    editable: true,
  };
}

import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Row, Col } from "react-bootstrap";
import { request } from "../helper/helper";

const { SearchBar } = Search;

export default class dataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const options = {
      custom: true,
      totalSize: this.state.rows.length,
    };
    console.log(this.state.rows);
    return (
      <ToolkitProvider
        keyField="_id"
        data={this.state.rows}
        columns={this.props.columns}
        search
      >
        {(props) => (
          <>
            <hr />
            <PaginationProvider pagination={paginationFactory(options)}>
              {({ paginationProps, paginationTableProps }) => (
                <>
                  <Row>
                    <Col>
                      <SizePerPageDropdownStandalone {...paginationProps} />
                    </Col>
                    <Col>
                      <SearchBar {...props.searchProps} />
                    </Col>
                  </Row>

                  <BootstrapTable
                    keyField="_id"
                    data={this.state.rows}
                    columns={this.props.columns}
                    {...paginationTableProps}
                    {...props.baseProps}
                  />
                  <PaginationListStandalone {...paginationProps} />
                </>
              )}
            </PaginationProvider>
          </>
        )}
      </ToolkitProvider>
    );
  }
}

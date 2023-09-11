import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Pagination from "@mui/material/Pagination";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

function createData(orderId, name, calories, fat, carbs, protein) {
  return { orderId, name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "WO001",
    "Casement window",
    "4sqmt",
    600.0,
    "Saint - Gobain",
    "New Request"
  ),
  createData(
    "WO002",
    "Transom",
    "4sqmt",
    700.0,
    "Saint - Gobain",
    "New Request"
  ),
  createData(
    "WO003",
    "Window",
    "4sqmt",
    800.0,
    "Saint - Gobain",
    "Processing.."
  ),
  createData("WO004", "Skylight", "4sqmt", 1000.0, "Saint - Gobain", "Shipped"),
  createData(
    "WO005",
    "Jalousie window",
    "4sqmt",
    400.0,
    "Saint - Gobain",
    "Processing.."
  ),
];
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Workorders() {
  return (
    <div style={{ marginLeft: "7%", width: "90%" }}>
      <Paper
        variant="outlined"
        square
        style={{ marginTop: "3%", height: "10vh", padding: "10px" }}
      >
        <div
          style={{
            marginTop: "1%",
            float: "left",
            fontWeight: "bold",
            color: "#254A9A",
          }}
        >
          Work Orders
        </div>
        <div
          role="presentation"
          style={{ marginTop: ".5%", float: "right" }}
          onClick={handleClick}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              label="Home"
              href="#"
              icon={<HomeIcon fontSize="small" />}
            />
            {/* <StyledBreadcrumb component="a" href="#" label="Catalog" /> */}
            <StyledBreadcrumb
              label="Work Orders"
              component="a"
              href="#"
              icon={<AssignmentIcon fontSize="small" />}
            />
          </Breadcrumbs>
        </div>
      </Paper>
      <TableContainer style={{ marginTop: "2%" }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                align="center"
                style={{ backgroundColor: "#254A9A" }}
              >
                Order Code
              </StyledTableCell>
              <StyledTableCell
                style={{ backgroundColor: "#254A9A" }}
                align="center"
              >
                Item(s)
              </StyledTableCell>
              <StyledTableCell
                style={{ backgroundColor: "#254A9A" }}
                align="center"
              >
                Area
              </StyledTableCell>
              <StyledTableCell
                style={{ backgroundColor: "#254A9A" }}
                align="center"
              >
                Value
              </StyledTableCell>
              <StyledTableCell
                style={{ backgroundColor: "#254A9A" }}
                align="center"
              >
                Supplier
              </StyledTableCell>
              <StyledTableCell
                style={{ backgroundColor: "#254A9A" }}
                align="center"
              >
                Status
              </StyledTableCell>
              <StyledTableCell
                style={{ backgroundColor: "#254A9A" }}
                align="center"
              >
                Actions
              </StyledTableCell>{" "}
              {/* Added Actions column */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.orderId}>
                <StyledTableCell component="th" scope="row">
                  {row.orderId}
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "5%" }}
                  >
                    View
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Delete
                  </Button>
                </StyledTableCell>{" "}
                {/* Added View and Delete buttons */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={10} color="primary" />
    </div>
  );
}
export default Workorders;

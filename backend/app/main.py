from fastapi import FastAPI, HTTPException
from sqlalchemy import text
from dotenv import load_dotenv

from .database import Base, engine, SessionLocal
from .models import Employee, Attendance, Leave, Payroll
from .schemas import (
    EmployeeCreate,
    AttendanceCreate,
    LeaveCreate,
    PayrollCreate,
)

load_dotenv()

# --------------------------------------------------
# DATABASE TABLE CREATION
# --------------------------------------------------

Base.metadata.create_all(bind=engine)


# --------------------------------------------------
# FASTAPI APPLICATION
# --------------------------------------------------

app = FastAPI(
    title="HRMS Backend",
    description="Human Resource Management System API",
    version="1.0.0",
)


# --------------------------------------------------
# ROOT
# --------------------------------------------------

@app.get("/")
def root():
    return {
        "message": "HRMS Backend is running!",
        "status": "success",
    }


# --------------------------------------------------
# DATABASE TEST
# --------------------------------------------------

@app.get("/db-test")
def db_test():
    try:
        with engine.connect() as connection:
            result = connection.execute(
                text("SELECT DATABASE()")
            )
            database_name = result.scalar()

        return {
            "message": "MySQL connection successful!",
            "database": database_name,
        }

    except Exception as error:
        return {
            "message": "MySQL connection failed!",
            "error": str(error),
        }


# ==================================================
# EMPLOYEES
# ==================================================

@app.get("/employees")
def get_employees():
    db = SessionLocal()

    try:
        employees = db.query(Employee).all()

        return [
            {
                "id": employee.id,
                "name": employee.name,
                "email": employee.email,
                "department": employee.department,
                "job_title": employee.job_title,
                "phone": employee.phone,
            }
            for employee in employees
        ]

    finally:
        db.close()


@app.get("/employees/{employee_id}")
def get_employee(employee_id: int):
    db = SessionLocal()

    try:
        employee = (
            db.query(Employee)
            .filter(Employee.id == employee_id)
            .first()
        )

        if not employee:
            raise HTTPException(
                status_code=404,
                detail="Employee not found",
            )

        return {
            "id": employee.id,
            "name": employee.name,
            "email": employee.email,
            "department": employee.department,
            "job_title": employee.job_title,
            "phone": employee.phone,
        }

    finally:
        db.close()


@app.post("/employees")
def create_employee(employee: EmployeeCreate):
    db = SessionLocal()

    try:
        existing_employee = (
            db.query(Employee)
            .filter(Employee.email == employee.email)
            .first()
        )

        if existing_employee:
            raise HTTPException(
                status_code=400,
                detail="An employee with this email already exists",
            )

        new_employee = Employee(
            name=employee.name,
            email=employee.email,
            department=employee.department,
            job_title=employee.job_title,
            phone=employee.phone,
        )

        db.add(new_employee)
        db.commit()
        db.refresh(new_employee)

        return {
            "message": "Employee created successfully",
            "employee": {
                "id": new_employee.id,
                "name": new_employee.name,
                "email": new_employee.email,
                "department": new_employee.department,
                "job_title": new_employee.job_title,
                "phone": new_employee.phone,
            },
        }

    finally:
        db.close()


@app.put("/employees/{employee_id}")
def update_employee(
    employee_id: int,
    employee: EmployeeCreate,
):
    db = SessionLocal()

    try:
        existing_employee = (
            db.query(Employee)
            .filter(Employee.id == employee_id)
            .first()
        )

        if not existing_employee:
            raise HTTPException(
                status_code=404,
                detail="Employee not found",
            )

        existing_employee.name = employee.name
        existing_employee.email = employee.email
        existing_employee.department = employee.department
        existing_employee.job_title = employee.job_title
        existing_employee.phone = employee.phone

        db.commit()
        db.refresh(existing_employee)

        return {
            "message": "Employee updated successfully",
            "employee": {
                "id": existing_employee.id,
                "name": existing_employee.name,
                "email": existing_employee.email,
                "department": existing_employee.department,
                "job_title": existing_employee.job_title,
                "phone": existing_employee.phone,
            },
        }

    finally:
        db.close()


@app.delete("/employees/{employee_id}")
def delete_employee(employee_id: int):
    db = SessionLocal()

    try:
        employee = (
            db.query(Employee)
            .filter(Employee.id == employee_id)
            .first()
        )

        if not employee:
            raise HTTPException(
                status_code=404,
                detail="Employee not found",
            )

        db.delete(employee)
        db.commit()

        return {
            "message": "Employee deleted successfully",
            "employee_id": employee_id,
        }

    finally:
        db.close()


# ==================================================
# ATTENDANCE
# ==================================================

@app.post("/attendance")
def create_attendance(attendance: AttendanceCreate):
    db = SessionLocal()

    try:
        employee = (
            db.query(Employee)
            .filter(Employee.id == attendance.employee_id)
            .first()
        )

        if not employee:
            raise HTTPException(
                status_code=404,
                detail="Employee not found",
            )

        new_attendance = Attendance(
            employee_id=attendance.employee_id,
            date=attendance.date,
            status=attendance.status,
        )

        db.add(new_attendance)
        db.commit()
        db.refresh(new_attendance)

        return {
            "message": "Attendance recorded successfully",
            "attendance": {
                "id": new_attendance.id,
                "employee_id": new_attendance.employee_id,
                "date": new_attendance.date,
                "status": new_attendance.status,
            },
        }

    finally:
        db.close()


@app.get("/attendance")
def get_attendance():
    db = SessionLocal()

    try:
        records = db.query(Attendance).all()

        return [
            {
                "id": record.id,
                "employee_id": record.employee_id,
                "date": record.date,
                "status": record.status,
            }
            for record in records
        ]

    finally:
        db.close()


# ==================================================
# LEAVE MANAGEMENT
# ==================================================

@app.post("/leaves")
def create_leave(leave: LeaveCreate):
    db = SessionLocal()

    try:
        employee = (
            db.query(Employee)
            .filter(Employee.id == leave.employee_id)
            .first()
        )

        if not employee:
            raise HTTPException(
                status_code=404,
                detail="Employee not found",
            )

        if leave.end_date < leave.start_date:
            raise HTTPException(
                status_code=400,
                detail="End date cannot be before start date",
            )

        new_leave = Leave(
            employee_id=leave.employee_id,
            start_date=leave.start_date,
            end_date=leave.end_date,
            reason=leave.reason,
            status=leave.status,
        )

        db.add(new_leave)
        db.commit()
        db.refresh(new_leave)

        return {
            "message": "Leave request created successfully",
            "leave": {
                "id": new_leave.id,
                "employee_id": new_leave.employee_id,
                "start_date": new_leave.start_date,
                "end_date": new_leave.end_date,
                "reason": new_leave.reason,
                "status": new_leave.status,
            },
        }

    finally:
        db.close()


@app.get("/leaves")
def get_leaves():
    db = SessionLocal()

    try:
        records = db.query(Leave).all()

        return [
            {
                "id": record.id,
                "employee_id": record.employee_id,
                "start_date": record.start_date,
                "end_date": record.end_date,
                "reason": record.reason,
                "status": record.status,
            }
            for record in records
        ]

    finally:
        db.close()


# ==================================================
# PAYROLL
# ==================================================

@app.post("/payroll")
def create_payroll(payroll: PayrollCreate):
    db = SessionLocal()

    try:
        employee = (
            db.query(Employee)
            .filter(Employee.id == payroll.employee_id)
            .first()
        )

        if not employee:
            raise HTTPException(
                status_code=404,
                detail="Employee not found",
            )

        new_payroll = Payroll(
            employee_id=payroll.employee_id,
            month=payroll.month,
            basic_salary=payroll.basic_salary,
            deductions=payroll.deductions,
            net_salary=payroll.net_salary,
            status=payroll.status,
        )

        db.add(new_payroll)
        db.commit()
        db.refresh(new_payroll)

        return {
            "message": "Payroll created successfully",
            "payroll": {
                "id": new_payroll.id,
                "employee_id": new_payroll.employee_id,
                "month": new_payroll.month,
                "basic_salary": new_payroll.basic_salary,
                "deductions": new_payroll.deductions,
                "net_salary": new_payroll.net_salary,
                "status": new_payroll.status,
            },
        }

    finally:
        db.close()


@app.get("/payroll")
def get_payroll():
    db = SessionLocal()

    try:
        records = db.query(Payroll).all()

        return [
            {
                "id": record.id,
                "employee_id": record.employee_id,
                "month": record.month,
                "basic_salary": record.basic_salary,
                "deductions": record.deductions,
                "net_salary": record.net_salary,
                "status": record.status,
            }
            for record in records
        ]

    finally:
        db.close()


# ==================================================
# DASHBOARD
# ==================================================

@app.get("/dashboard")
def dashboard():
    db = SessionLocal()

    try:
        total_employees = db.query(Employee).count()
        total_attendance = db.query(Attendance).count()
        total_leaves = db.query(Leave).count()
        total_payroll = db.query(Payroll).count()

        pending_leaves = (
            db.query(Leave)
            .filter(Leave.status == "Pending")
            .count()
        )

        pending_payroll = (
            db.query(Payroll)
            .filter(Payroll.status == "Pending")
            .count()
        )

        return {
            "total_employees": total_employees,
            "total_attendance_records": total_attendance,
            "total_leave_requests": total_leaves,
            "pending_leave_requests": pending_leaves,
            "total_payroll_records": total_payroll,
            "pending_payroll_records": pending_payroll,
        }

    finally:
        db.close()
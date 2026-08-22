from datetime import date

from pydantic import BaseModel, EmailStr


class EmployeeCreate(BaseModel):
    name: str
    email: EmailStr
    department: str | None = None
    job_title: str | None = None
    phone: str | None = None


class AttendanceCreate(BaseModel):
    employee_id: int
    date: date
    status: str


class LeaveCreate(BaseModel):
    employee_id: int
    start_date: date
    end_date: date
    reason: str | None = None
    status: str = "Pending"


class PayrollCreate(BaseModel):
    employee_id: int
    month: str
    basic_salary: float
    deductions: float = 0
    net_salary: float
    status: str = "Pending"
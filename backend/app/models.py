from sqlalchemy import Column, Date, Float, ForeignKey, Integer, String

from .database import Base


class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    department = Column(String(100), nullable=True)
    job_title = Column(String(100), nullable=True)
    phone = Column(String(20), nullable=True)


class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(
        Integer,
        ForeignKey("employees.id"),
        nullable=False
    )
    date = Column(Date, nullable=False)
    status = Column(String(20), nullable=False)


class Leave(Base):
    __tablename__ = "leaves"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(
        Integer,
        ForeignKey("employees.id"),
        nullable=False
    )
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    reason = Column(String(255), nullable=True)
    status = Column(
        String(20),
        nullable=False,
        default="Pending"
    )


class Payroll(Base):
    __tablename__ = "payroll"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(
        Integer,
        ForeignKey("employees.id"),
        nullable=False
    )
    month = Column(String(20), nullable=False)
    basic_salary = Column(Float, nullable=False)
    deductions = Column(Float, nullable=False, default=0)
    net_salary = Column(Float, nullable=False)
    status = Column(
        String(20),
        nullable=False,
        default="Pending"
    )
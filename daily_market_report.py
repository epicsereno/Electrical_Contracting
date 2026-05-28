#!/usr/bin/env python3
"""Business-specific launcher for Electrical Contracting Business Overview."""

from pathlib import Path
import sys

ROOT_DIR = Path(__file__).resolve().parents[1]
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

from shared_automation.daily_market_report import BusinessDefaults, run_cli

if __name__ == "__main__":
    raise SystemExit(
        run_cli(
            BusinessDefaults(
                name="Electrical Contracting Business Overview",
                keywords=["electrical contracting California", "copper prices", "construction bid news"],
                business_dir=Path(__file__).resolve().parent,
            )
        )
    )

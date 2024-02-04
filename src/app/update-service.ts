import { Injectable, OnDestroy } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { interval, Subscription } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateService implements OnDestroy {
  private updateSubscription?: Subscription;
  private availableSubscription?: Subscription;

  constructor(private updates: SwUpdate) {
  }

  public checkForUpdates(): void {
    if (this.updates.isEnabled) {
      this.updateSubscription = interval(6 * 60 * 60).subscribe(() => this.updates.checkForUpdate());

      this.availableSubscription = this.updates.versionUpdates.subscribe(() => {
        this.updates.activateUpdate().then(() => document.location.reload());
      });
    }
  }

  ngOnDestroy() {
    this.updateSubscription?.unsubscribe();
    this.updateSubscription = null;

    this.availableSubscription?.unsubscribe();
    this.availableSubscription = null;
  }
}
